import ActiveElderaRegisterKeywordPage, { generateMetadata } from './active-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaRegisterKeywordPage />;
}

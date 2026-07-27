import ActiveXanteriaRegisterKeywordPage, { generateMetadata } from './active-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaRegisterKeywordPage />;
}

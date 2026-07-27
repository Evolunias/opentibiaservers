import KasteriaRegisterKeywordPage, { generateMetadata } from './kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRegisterKeywordPage />;
}

import SabrehavenFunServerKeywordPage, { generateMetadata } from './sabrehaven-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenFunServerKeywordPage />;
}

import TibiaoriginsBrazilServerKeywordPage, { generateMetadata } from './tibiaorigins-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsBrazilServerKeywordPage />;
}

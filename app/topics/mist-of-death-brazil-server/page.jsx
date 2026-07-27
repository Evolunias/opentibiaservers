import MistOfDeathBrazilServerKeywordPage, { generateMetadata } from './mist-of-death-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathBrazilServerKeywordPage />;
}

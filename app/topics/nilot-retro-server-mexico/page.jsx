import NilotRetroServerMexicoKeywordPage, { generateMetadata } from './nilot-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotRetroServerMexicoKeywordPage />;
}

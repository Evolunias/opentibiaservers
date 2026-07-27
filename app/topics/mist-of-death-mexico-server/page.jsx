import MistOfDeathMexicoServerKeywordPage, { generateMetadata } from './mist-of-death-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathMexicoServerKeywordPage />;
}

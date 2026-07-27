import MistOfDeathChileServerKeywordPage, { generateMetadata } from './mist-of-death-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathChileServerKeywordPage />;
}

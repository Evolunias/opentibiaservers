import MistOfDeathGermanyServerKeywordPage, { generateMetadata } from './mist-of-death-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathGermanyServerKeywordPage />;
}

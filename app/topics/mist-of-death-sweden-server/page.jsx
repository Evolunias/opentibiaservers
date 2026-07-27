import MistOfDeathSwedenServerKeywordPage, { generateMetadata } from './mist-of-death-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathSwedenServerKeywordPage />;
}

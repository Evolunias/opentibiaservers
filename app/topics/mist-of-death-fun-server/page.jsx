import MistOfDeathFunServerKeywordPage, { generateMetadata } from './mist-of-death-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathFunServerKeywordPage />;
}

import MistOfDeathPolandServerKeywordPage, { generateMetadata } from './mist-of-death-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathPolandServerKeywordPage />;
}

import MistOfDeathStatusKeywordPage, { generateMetadata } from './mist-of-death-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathStatusKeywordPage />;
}

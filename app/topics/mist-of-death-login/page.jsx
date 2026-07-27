import MistOfDeathLoginKeywordPage, { generateMetadata } from './mist-of-death-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathLoginKeywordPage />;
}

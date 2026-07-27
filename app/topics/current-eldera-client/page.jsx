import CurrentElderaClientKeywordPage, { generateMetadata } from './current-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaClientKeywordPage />;
}

import CurrentTibianusClientKeywordPage, { generateMetadata } from './current-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusClientKeywordPage />;
}

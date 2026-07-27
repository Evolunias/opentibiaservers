import CurrentBlazeraKeywordPage, { generateMetadata } from './current-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraKeywordPage />;
}

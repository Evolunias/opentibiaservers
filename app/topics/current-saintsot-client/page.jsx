import CurrentSaintsotClientKeywordPage, { generateMetadata } from './current-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotClientKeywordPage />;
}

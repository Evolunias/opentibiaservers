import CurrentSaintsotServerKeywordPage, { generateMetadata } from './current-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotServerKeywordPage />;
}

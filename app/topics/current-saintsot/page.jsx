import CurrentSaintsotKeywordPage, { generateMetadata } from './current-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotKeywordPage />;
}

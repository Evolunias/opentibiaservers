import OfficialClassickDrakoriaKeywordPage, { generateMetadata } from './official-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaKeywordPage />;
}

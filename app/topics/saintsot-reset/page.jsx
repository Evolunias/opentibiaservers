import SaintsotResetKeywordPage, { generateMetadata } from './saintsot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotResetKeywordPage />;
}

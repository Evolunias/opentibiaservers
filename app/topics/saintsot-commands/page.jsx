import SaintsotCommandsKeywordPage, { generateMetadata } from './saintsot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCommandsKeywordPage />;
}

import ArchlightCommandsKeywordPage, { generateMetadata } from './archlight-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightCommandsKeywordPage />;
}

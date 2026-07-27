import PvpEnforcedOtServerForumKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerForumKeywordPage />;
}

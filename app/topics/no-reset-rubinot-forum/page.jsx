import NoResetRubinotForumKeywordPage, { generateMetadata } from './no-reset-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotForumKeywordPage />;
}

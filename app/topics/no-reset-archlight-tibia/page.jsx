import NoResetArchlightTibiaKeywordPage, { generateMetadata } from './no-reset-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightTibiaKeywordPage />;
}

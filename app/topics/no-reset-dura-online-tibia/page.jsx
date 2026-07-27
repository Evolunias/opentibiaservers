import NoResetDuraOnlineTibiaKeywordPage, { generateMetadata } from './no-reset-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineTibiaKeywordPage />;
}

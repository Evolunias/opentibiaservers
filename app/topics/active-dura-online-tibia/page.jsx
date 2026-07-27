import ActiveDuraOnlineTibiaKeywordPage, { generateMetadata } from './active-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineTibiaKeywordPage />;
}

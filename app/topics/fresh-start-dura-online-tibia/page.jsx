import FreshStartDuraOnlineTibiaKeywordPage, { generateMetadata } from './fresh-start-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDuraOnlineTibiaKeywordPage />;
}

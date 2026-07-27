import CurrentDuraOnlineTibiaKeywordPage, { generateMetadata } from './current-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineTibiaKeywordPage />;
}

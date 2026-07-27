import Tibia96OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-9-6-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OpenTibiaServerKeywordPage />;
}

import Tibia14OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-14-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OpenTibiaServerKeywordPage />;
}

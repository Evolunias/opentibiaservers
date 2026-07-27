import Tibia12OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-12-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OpenTibiaServerKeywordPage />;
}

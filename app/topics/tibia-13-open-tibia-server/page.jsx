import Tibia13OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-13-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OpenTibiaServerKeywordPage />;
}

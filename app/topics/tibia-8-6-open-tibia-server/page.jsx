import Tibia86OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-8-6-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OpenTibiaServerKeywordPage />;
}

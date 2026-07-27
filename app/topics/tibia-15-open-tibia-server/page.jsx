import Tibia15OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-15-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OpenTibiaServerKeywordPage />;
}

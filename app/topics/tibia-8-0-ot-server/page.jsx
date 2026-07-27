import Tibia80OtServerKeywordPage, { generateMetadata } from './tibia-8-0-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OtServerKeywordPage />;
}

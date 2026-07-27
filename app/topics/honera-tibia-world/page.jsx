import HoneraTibiaWorldKeywordPage, { generateMetadata } from './honera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraTibiaWorldKeywordPage />;
}

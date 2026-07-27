import HoneraTibiaKeywordPage, { generateMetadata } from './honera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraTibiaKeywordPage />;
}

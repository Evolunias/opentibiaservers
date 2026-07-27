import PopularMiracleTibiaKeywordPage, { generateMetadata } from './popular-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleTibiaKeywordPage />;
}

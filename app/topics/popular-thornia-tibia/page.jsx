import PopularThorniaTibiaKeywordPage, { generateMetadata } from './popular-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaTibiaKeywordPage />;
}

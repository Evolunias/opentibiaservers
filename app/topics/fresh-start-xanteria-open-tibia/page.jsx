import FreshStartXanteriaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaOpenTibiaKeywordPage />;
}

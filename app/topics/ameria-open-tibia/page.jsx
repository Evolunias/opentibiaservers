import AmeriaOpenTibiaKeywordPage, { generateMetadata } from './ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaOpenTibiaKeywordPage />;
}

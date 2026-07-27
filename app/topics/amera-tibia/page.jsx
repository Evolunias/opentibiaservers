import AmeraTibiaKeywordPage, { generateMetadata } from './amera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraTibiaKeywordPage />;
}

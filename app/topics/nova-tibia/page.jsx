import NovaTibiaKeywordPage, { generateMetadata } from './nova-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaTibiaKeywordPage />;
}

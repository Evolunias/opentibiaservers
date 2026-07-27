import RefugiaTibiaKeywordPage, { generateMetadata } from './refugia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaTibiaKeywordPage />;
}

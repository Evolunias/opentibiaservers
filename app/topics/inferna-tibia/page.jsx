import InfernaTibiaKeywordPage, { generateMetadata } from './inferna-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaTibiaKeywordPage />;
}

import AuroraWorldPage, { generateMetadata } from './aurora-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AuroraWorldPage />;
}

import TheNexusWorldANewEraPage, { generateMetadata } from './the-nexus-world-a-new-era';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheNexusWorldANewEraPage />;
}

import ArchezotRemakePage, { generateMetadata } from './archezot-remake';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchezotRemakePage />;
}

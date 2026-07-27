import ProjectAnticaClassicTibiaPage, { generateMetadata } from './project-antica-classic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ProjectAnticaClassicTibiaPage />;
}
